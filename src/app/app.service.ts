import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  pessoaUrl = 'http://localhost:8080/pessoa';

  unidadeUrl = 'http://localhost:8080/unidade';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Array<any>>(this.pessoaUrl);
  }

  listarUnidade(){
    return this.http.get<Array<any>>(this.unidadeUrl);
  }

  criar(pessoa: any) {
    return this.http.post(this.pessoaUrl, pessoa);
  }

  criarUnidade(unidade: any){
    return this.http.post(this.unidadeUrl, unidade);
  }
}
