import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  codigo: number;
  pessoaUrl = 'http://localhost:8080/pessoa';

 // unidadeUrl = 'http://localhost:8080/unidade';

  constructor(private http: HttpClient) { }

  getPessoa(codigo: number): Observable<any> {
    return this.http.get(`${this.pessoaUrl}/${codigo}`);
  }

  listar() {
    return this.http.get<Array<any>>(this.pessoaUrl);
  }

  updatePessoa(codigo: number, pessoa:any): Observable<object>{
    return this.http.put(`${this.pessoaUrl}/${codigo}`, pessoa);
  }

  dletePessoa(codigo){
    return this.http.delete<Array<any>>(this.pessoaUrl+'/'+`${codigo}`)
  }

  criar(pessoa: any) {
    return this.http.post(this.pessoaUrl, pessoa);
  }
}
