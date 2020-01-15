import { Component, OnInit } from '@angular/core';
import { FormGroup, } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  pessoas: Array<any>;
  pessoa: any;
  codigo: number;



  constructor(private service: AppService, private router: Router) { 
    }
 

  
  ngOnInit() {
    this.pessoa = {};

    //this.criarFormularioDeUsuario();
    this.service.listar()
      .subscribe(resposta => this.pessoas = resposta);
  }

  criar(frm: FormGroup) {
    this.service.criar(this.pessoa).subscribe(resposta => { 
      this.pessoas.push(resposta);

      frm.reset();
      this.service.listar();
    });
}

updatePessoa(codigo: number) {
 this.router.navigate(['update', codigo]);
}

delete(codigo: number) {
  this.service.dletePessoa(codigo).subscribe(resposta => {
    this.service.listar();
    this.pessoa = resposta
    
  });
}


}
